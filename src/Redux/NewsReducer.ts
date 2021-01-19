import { IEditNews, INews } from "../interfaces";
import { newsDataList } from "../newsDataList";

const ADD_NEWS = "ADD-NEWS";
const REMOVE_NEWS = "REMOVE-NEWS";
const SEARCH_NEWS = "SEARCH-NEWS";
const UPDATE_WORD = "SEARCH-WORD";
const EDIT_NEWS = "EDIT-NEWS";

interface IAddNewsActionCreator {
  type: typeof ADD_NEWS;
  massage: INews;
}

interface IRemoveNewsActionCreator {
  type: typeof REMOVE_NEWS;
  massage: number;
}

interface ISearchActionCreator {
  type: typeof SEARCH_NEWS;
  massage?: string;
}

interface IUpdateWordActionCreator {
  type: typeof UPDATE_WORD;
  massage: string;
}

interface IEditNewsActionCreator {
  type: typeof EDIT_NEWS;
  massage: IEditNews;
}

let initialState = {
  newsData: [
    {
      newsText: newsDataList[0].newsText,
      newsTitle: newsDataList[0].newsTitle,
      newsAuthor: newsDataList[0].newsAuthor,
      id: 4531321231223,
      editNews: false,
    },
    {
      newsText: newsDataList[1].newsText,
      newsTitle: newsDataList[1].newsTitle,
      newsAuthor: newsDataList[1].newsAuthor,
      id: 3231321251223,
      editNews: false,
    },
  ],
  newsDataCopy: [
    {
      newsText: newsDataList[0].newsText,
      newsTitle: newsDataList[0].newsTitle,
      newsAuthor: newsDataList[0].newsAuthor,
      id: 4531321231223,
      editNews: false,
    },
    {
      newsText: newsDataList[1].newsText,
      newsTitle: newsDataList[1].newsTitle,
      newsAuthor: newsDataList[1].newsAuthor,
      id: 3231321251223,
      editNews: false,
    },
  ],
  searchWord: "",
};

const newsReducer = (
  state = initialState,
  action:
    | IAddNewsActionCreator
    | IRemoveNewsActionCreator
    | ISearchActionCreator
    | IUpdateWordActionCreator
    | IEditNewsActionCreator
) => {
  switch (action.type) {
    case ADD_NEWS: {
      return {
        ...state,
        newsDataCopy: [action.massage, ...state.newsData],
        newsData: [action.massage, ...state.newsData],
      };
    }
    case REMOVE_NEWS: {
      return {
        ...state,
        newsData: [
          ...state.newsData.filter((news) => news.id !== action.massage),
        ],
      };
    }
    case UPDATE_WORD: {
      return {
        ...state,
        searchWord: action.massage,
      };
    }
    case SEARCH_NEWS: {
      return {
        ...state,
        newsData: [
          ...state.newsDataCopy.filter((news) => {
            if (
              news.newsText
                .toLowerCase()
                .includes(state.searchWord.toLowerCase()) ||
              news.newsAuthor
                .toLowerCase()
                .includes(state.searchWord.toLowerCase()) ||
              news.newsTitle
                .toLowerCase()
                .includes(state.searchWord.toLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
          }),
        ],
      };

      /* return {
                ...state,
                newsData: [
					...state.newsData.filter((news) => {
						return news.newsText.toLowerCase().includes(state.searchWord.toLowerCase())
					})
				]
            } */
    }
    case EDIT_NEWS: {
      return {
        ...state,
        newsData: [
          ...state.newsData.map((news) => {
            if (news.id === action.massage.id) {
              news.newsText = action.massage.e;
              return news;
            } else {
              return news;
            }
          }),
        ],
      };
    }
    default:
      return state;
  }
};

export const addNewsActionCreator = (
  newNews: INews
): IAddNewsActionCreator => ({
  type: ADD_NEWS,
  massage: newNews,
});

export const removeNewsActionCreator = (
  id: number
): IRemoveNewsActionCreator => ({
  type: REMOVE_NEWS,
  massage: id,
});

export const searchActionCreator = (): ISearchActionCreator => ({
  type: SEARCH_NEWS,
});

export const updateWordActionCreator = (
  massage: string
): IUpdateWordActionCreator => ({
  type: UPDATE_WORD,
  massage: massage,
});

export const editNewsActionCreator = (
  editNews: IEditNews
): IEditNewsActionCreator => ({
  type: EDIT_NEWS,
  massage: editNews,
});

export default newsReducer;
