import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { Article } from '@/entities/Article';

export interface ArticleDetailsPageRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
