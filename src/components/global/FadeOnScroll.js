'use client'
import SlideOnScroll from './SlideOnScroll'

export default function FadeOnScroll({ children }) {
    return <SlideOnScroll direction='bottom'>{children}</SlideOnScroll>
}
