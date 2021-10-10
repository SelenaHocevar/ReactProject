import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TOPRATED_BASE_URL,
  AIRINGTODAY_BASE_URL,
  TRENDINGDAY_BASE_URL,
  TRENDINGWEEK_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL
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
  fetchMovie: async showId => {
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
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value })
      })
    ).json();

    return rating;
  }
};

export default apiSettings;
