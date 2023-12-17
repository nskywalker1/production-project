import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsPageRecommendationsReducer,
} from '../../model/slice/articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types/index';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
