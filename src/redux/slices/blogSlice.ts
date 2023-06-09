import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPostList } from "../../data/blog";
import { IPost } from "../../interface/interface";

interface IBlogState {
    postList: IPost[];
    isOpen: boolean;
    dataEdit: IPost | null;
}

const initialState: IBlogState = {
    postList: initialPostList,
    isOpen: false,
    dataEdit: null,
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        doActionAddPost: (state, action: PayloadAction<IPost>) => {
            const postList: IPost[] = state.postList;
            postList.push(action.payload);
        },
        doActionDeletePost: (state, action: PayloadAction<number>) => {
            const postId = action.payload;
            const results: IPost[] | null = state.postList.filter(
                (post) => postId !== post.id
            );
            state.postList = results;
        },
        doActionEditModal: (state, action: PayloadAction<number>) => {
            state.isOpen = true;
            const postId = action.payload;
            const foundPost =
                state.postList.find((post) => post.id === postId) || null;
            state.dataEdit = foundPost;
        },
        doActionCancelModal: (state) => {
            state.isOpen = false;
        },
        doActionUpdatePost: (state, action: PayloadAction<IPost>) => {
            const postId = action.payload.id;
            state.postList.some((post, index) => {
                if (post.id === postId) {
                    state.postList[index] = action.payload;
                    return true;
                }
                return false;
            });
        },
    },
});

export const {
    doActionAddPost,
    doActionDeletePost,
    doActionEditModal,
    doActionCancelModal,
    doActionUpdatePost,
} = blogSlice.actions;

export default blogSlice.reducer;
