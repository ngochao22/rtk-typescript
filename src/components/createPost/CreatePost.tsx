import React, { useState, useRef, useEffect } from "react";
import { IPost } from "../../interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { doActionAddPost } from "../../redux/slices/blogSlice";
import { RootState } from "../../redux/store";
import Modal from "../modal/Modal";

const initialPost: IPost = {
    id: 0,
    description: "",
    publishDate: "",
    published: false,
    title: "",
    featuredImage: "",
};

const CreatePost: React.FC = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<IPost>(initialPost);
    const isOpen = useSelector((state: RootState) => state.blog.isOpen);
    const dataEdit = useSelector((state: RootState) => state.blog.dataEdit);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formDataWithId: IPost = {
            ...formData,
            id: Math.random() * 1000000,
        };
        dispatch(doActionAddPost(formDataWithId));
        setFormData(initialPost);
        inputRef?.current?.focus();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Title
                    </label>
                    <input
                        ref={inputRef}
                        type="text"
                        id="title"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Title"
                        required
                        value={formData.title}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                title: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="featuredImage"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Featured Image
                    </label>
                    <input
                        type="text"
                        id="featuredImage"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Url image"
                        required
                        value={formData.featuredImage}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                featuredImage: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="mb-6">
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            rows={3}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            placeholder="Your description..."
                            required
                            value={formData.description}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="publishDate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Publish Date
                    </label>
                    <input
                        type="datetime-local"
                        id="publishDate"
                        className="block w-56 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Title"
                        required
                        value={formData.publishDate}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                publishDate: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="flex items-center mb-6">
                    <input
                        id="publish"
                        type="checkbox"
                        className="w-4 h-4 focus:ring-2 focus:ring-blue-500"
                        checked={formData.published}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                published: e.target.checked,
                            }))
                        }
                    />
                    <label
                        htmlFor="publish"
                        className="ml-2 text-sm font-medium text-gray-900"
                    >
                        Publish
                    </label>
                </div>
                <div>
                    <button
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
                        type="submit"
                    >
                        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                            Publish Post
                        </span>
                    </button>
                </div>
            </form>
            {isOpen && dataEdit ? <Modal dataEdit={dataEdit}></Modal> : ""}
        </>
    );
};

export default CreatePost;
