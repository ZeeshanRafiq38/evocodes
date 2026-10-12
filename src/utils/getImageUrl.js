import { baseURL } from '@/config/api';

export const getImageUrl = (image, fallback = '/images/blog.png') => {
    if (!image) return fallback;
    if (/^https?:\/\//i.test(image)) return image;

    const normalizedBaseURL = baseURL?.replace(/\/$/, '');
    const normalizedImage = image.startsWith('/') ? image : `/${image}`;

    return normalizedBaseURL ? `${normalizedBaseURL}${normalizedImage}` : fallback;
};
