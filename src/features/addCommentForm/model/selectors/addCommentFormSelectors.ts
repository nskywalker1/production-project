import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text || undefined;
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
