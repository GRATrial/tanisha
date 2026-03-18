import React, { useState, useMemo, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Tabs } from './components/Tabs';
import { ResultCard } from './components/ResultCard';
import { LinkedInProfileView as LinkedInProfile } from './components/LinkedInProfile';
import { FacebookProfileView as FacebookProfile } from './components/FacebookProfile';
import { PeopleAlsoSearchFor } from './components/PeopleAlsoSearchFor';

import {
  RESULTS_Tanisha_Jefferson,
  type SimResult
} from './data/results';
import { getRelatedSearches } from './data/relatedSearches';
import { trackPageView, trackTabChange, trackPagination, trackSearch, trackResultClick, trackEvent, trackProfileView, trackProfileClose, trackSessionEnd } , type ProlificParams } from './utils/tracking';

interface GoogleSimulationProps {
  searchType?: 'tanisha';
}

const GoogleSimulation: React.FC<GoogleSimulationProps> = ({ searchType = 'tanisha' }) => {
  const [searchQuery, setSearchQuery] = useState('Tanisha Jefferson');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedResult, setSelectedResult] = useState<SimResult | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const resultsPerPage = 10;

  const initialParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const returnUrl = useMemo(() => initialParams.get('returnUrl') || 'https://gmu.az1.qualtrics.com/jfe/form/SV_dpetNtWS5RNFmMS', [initialParams]);
  const footprintCondition = useMemo(() => initialParams.get('condition') || 'present', [initialParams]);
  // Capture Prolific parameters from URL
  const prolificParams: ProlificParams = useMemo(() => ({
    prolificPid: initialParams.get('PROLIFIC_PID') || undefined,
    studyId: initialParams.get('STUDY_ID') || undefined,
    sessionIdProlific: initialParams.get('SESSION_ID') || undefined,
  }), [initialParams]);

  // Force light mode as requested
  const isDark = false;

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset to first page when activeTab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Track page view on mount
  useEffect(() => {
    trackPageView('tanisha', currentPage, activeTab, footprintCondition, prolificParams);
  }, []);

  // Track session end on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      trackSessionEnd('tanisha', currentPage, activeTab, footprintCondition, prolificParams);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentPage, activeTab, footprintCondition]);

  // Track tab changes
  useEffect(() => {
    if (activeTab) {
      trackTabChange(activeTab, 'tanisha', footprintCondition, prolificParams);
    }
  }, [activeTab, footprintCondition]);

  // Track pagination
  useEffect(() => {
    if (currentPage > 1) {
      trackPagination(currentPage, 'tanisha', footprintCondition, prolificParams);
    }
  }, [currentPage, footprintCondition]);

  // Get results for Tanisha (filter out LinkedIn/Facebook in footprint absent condition)
  const allResults = useMemo(() => {
    if (footprintCondition === 'absent') {
      return RESULTS_Tanisha_Jefferson.filter(
        r => r.platform !== 'LinkedIn' && r.platform !== 'Facebook'
      );
    }
    return RESULTS_Tanisha_Jefferson;
  }, [footprintCondition]);

  // Filter results by active tab
  const filteredResults = useMemo(() => {
    let filtered = allResults;
    if (activeTab !== 'All' && activeTab !== 'Videos' && activeTab !== 'Images' && activeTab !== 'News' && activeTab !== 'Short videos' && activeTab !== 'Shopping') {
      filtered = filtered.filter(result => result.platform === activeTab);
    }
    return filtered;
  }, [allResults, activeTab]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = filteredResults.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 10;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  // Safety check
  if (!allResults || allResults.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>No results found</h1>
        <p>Tanisha Jefferson results are not available.</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <TopBar
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          if (query) {
            trackSearch(query, 'tanisha', footprintCondition, prolificParams);
          }
        }}
        isDark={isDark}
      />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} isDark={isDark} />

      <div style={{ maxWidth: '1128px', margin: '0 auto', padding: isMobile ? '0 8px' : '0 16px' }}>
        {/* Back to survey button - outside the results column */}
        <div style={{ paddingTop: isMobile ? '12px' : '20px', paddingBottom: '8px' }}>
          <button
            onClick={() => {
              if (!returnUrl) {
                console.error('Missing returnUrl query parameter');
                return;
              }
              trackEvent({
                eventType: 'click',
                elementType: 'done_searching_button',
                elementText: 'Done Searching',
                persona: 'tanisha',
                page: currentPage,
                tab: activeTab,
                condition: footprintCondition,
                ...prolificParams,
              });
              // Build return URL with Prolific params appended
              const finalReturnUrl = new URL(returnUrl);
              if (prolificParams.prolificPid) finalReturnUrl.searchParams.set('PROLIFIC_PID', prolificParams.prolificPid);
              if (prolificParams.studyId) finalReturnUrl.searchParams.set('STUDY_ID', prolificParams.studyId);
              if (prolificParams.sessionIdProlific) finalReturnUrl.searchParams.set('SESSION_ID', prolificParams.sessionIdProlific);
              window.location.href = finalReturnUrl.toString();
            }}
            style={{
              backgroundColor: '#1a73e8',
              border: 'none',
              borderRadius: '24px',
              padding: '12px 24px',
              cursor: 'pointer',
              color: '#fff',
              fontWeight: 600,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(26, 115, 232, 0.4)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1557b0'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 115, 232, 0.5)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1a73e8'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 115, 232, 0.4)'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Done Searching</span>
          </button>
        </div>
        <div style={{ display: 'flex', gap: isMobile ? '0' : '32px' }}>
          {/* Main Results Column */}
          <div style={{ flex: '1', minWidth: 0, width: '100%' }}>
            {/* Results Count */}
            <div style={{ color: '#70757a', fontSize: '14px', marginBottom: '16px' }}>
              About 967,000 results (0.41 seconds)
            </div>

            {/* Results List */}
            {filteredResults.length === 0 ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <p style={{ color: '#70757a', fontSize: '16px' }}>
                  No results found. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div>
                {paginatedResults.map((result, index) => {
                  return (
                    <React.Fragment key={result.id}>
                      <ResultCard
                        result={result}
                        onOpen={(result) => {
                          // Track the click for all results
                          trackResultClick(result.id, result.platform, result.displayName, 'tanisha', footprintCondition, prolificParams);
                          // In footprint absent condition, no profiles open
                          if (footprintCondition === 'absent') return;
                          // Only open LinkedIn and Facebook profiles
                          if (result.platform === 'LinkedIn' || result.platform === 'Facebook') {
                            setSelectedResult(result);
                            trackProfileView(result.id, result.platform, result.displayName, 'tanisha', footprintCondition, prolificParams);
                          }
                        }}
                        isDark={isDark}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {filteredResults.length > 0 && totalPages > 1 && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '4px',
                marginTop: '32px',
                marginBottom: '32px',
                paddingTop: '20px',
                borderTop: '1px solid #ebebeb'
              }}>
                {currentPage > 1 && (
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                      trackPagination(currentPage - 1, 'tanisha', footprintCondition, prolificParams);}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #dadce0',
                      borderRadius: '4px',
                      backgroundColor: 'transparent',
                      color: '#1a0dab',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>‹</span> Previous
                  </button>
                )}

                {getPageNumbers().map((page, index) => {
                  if (page === '...') return <span key={`ellipsis-${index}`} style={{ padding: '0 8px', color: '#70757a' }}>...</span>;
                  const pageNum = page as number;
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        trackPagination(pageNum, 'tanisha', footprintCondition, prolificParams);}
                      style={{
                        minWidth: '40px',
                        height: '40px',
                        padding: '0 8px',
                        border: '1px solid #dadce0',
                        borderRadius: '4px',
                        backgroundColor: isActive ? '#1a0dab' : 'transparent',
                        color: isActive ? '#fff' : '#1a0dab',
                        fontSize: '14px',
                        cursor: 'pointer',
                        fontWeight: isActive ? 500 : 400
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {currentPage < totalPages && (
                  <button
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                      trackPagination(currentPage + 1, 'tanisha', footprintCondition, prolificParams);}
                    style={{
                      padding: '8px 16px',
                      border: '1px solid #dadce0',
                      borderRadius: '4px',
                      backgroundColor: 'transparent',
                      color: '#1a0dab',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Next <span>›</span>
                  </button>
                )}
              </div>
            )}

            {/* People Also Search For */}
            {activeTab === 'All' && filteredResults.length > 0 && (
              <PeopleAlsoSearchFor 
                searches={getRelatedSearches(searchQuery || 'Michael Johnson')} 
                searchQuery={searchQuery}
                onSearchClick={setSearchQuery}
              />
            )}
          </div>
        </div>
      </div>

      {/* LinkedIn Profile or Facebook Profile */}
      {selectedResult && selectedResult.platform === 'LinkedIn' && (
        <LinkedInProfile
          resultId={selectedResult.id}
          onClose={() => {
            if (selectedResult) { trackProfileClose(selectedResult.id, 'LinkedIn', 'tanisha', footprintCondition, prolificParams); }
            setSelectedResult(null);
          }}
        />
      )}
      {selectedResult && selectedResult.platform === 'Facebook' && (
        <FacebookProfile
          resultId={selectedResult.id}
          onClose={() => {
            if (selectedResult) { trackProfileClose(selectedResult.id, 'Facebook', 'tanisha', footprintCondition, prolificParams); }
            setSelectedResult(null);
          }}
        />
      )}
    </div>
  );
};

export default GoogleSimulation;
