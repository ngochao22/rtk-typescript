import React, { useState } from "react";
import { IPost } from "../../interface/interface";
import { useDispatch } from "react-redux";
import {
    doActionCancelModal,
    doActionUpdatePost,
} from "../../redux/slices/blogSlice";

interface IProps {
    dataEdit: IPost;
}

const Modal: React.FC<IProps> = ({ dataEdit }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<IPost>(dataEdit);
    console.log(formData);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(doActionUpdatePost(formData));
    };
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen container-modal">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
            <form
                className="relative w-[80%] mx-[10%] p-[50px] rounded-lg bg-white cursor-auto"
                onSubmit={handleSubmit}
            >
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        placeholder="Title"
                        required
                        defaultValue={dataEdit.title}
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
                        defaultValue={dataEdit.featuredImage}
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
                            defaultValue={dataEdit.description}
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
                        defaultValue={dataEdit.publishDate}
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
                        defaultChecked={dataEdit.published}
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
                        type="submit"
                        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
                    >
                        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                            Update Post
                        </span>
                    </button>
                    <button
                        type="reset"
                        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
                        onClick={() => dispatch(doActionCancelModal())}
                    >
                        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                            Cancel
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
