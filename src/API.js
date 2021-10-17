import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TOPRATED_BASE_URL,
  AIRINGTODAY_BASE_URL,
  TRENDINGDAY_BASE_URL,
  TRENDINGWEEK_BASE_URL,
  API_URL,
  API_KEY
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchTvShows: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTopRatedTvShows: async (searchTerm, page) => {
    const endpoint = `${TOPRATED_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchAiringToday: async (searchTerm, page) => {
    const endpoint = `${AIRINGTODAY_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrendingToday: async (searchTerm, page) => {
    const endpoint = `${TRENDINGDAY_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrendingWeekly: async (searchTerm, page) => {
    const endpoint = `${TRENDINGWEEK_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchShow: async showId => {
    const endpoint = `${API_URL}tv/${showId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async showId => {
    const creditsEndpoint = `${API_URL}tv/${showId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchImages: async showId => {
    const creditsEndpoint = `${API_URL}tv/${showId}/images?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  }
};

export default apiSettings;
