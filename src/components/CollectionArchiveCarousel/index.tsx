'use client'
import { Card, CardPostData } from '@/components/Card'
import useEmblaCarousel from 'embla-carousel-react'
import { AlignLeftIcon, AlignRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper/types'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaArrowButton'
import styles from './styles.module.scss'
export type Props = {
  posts: CardPostData[]
  slidePerViewport: {
    mobile?: number
    tablet?: number
    pc?: number
  }
}

export const CollectionArchiveCarousel: React.FC<Props> = (props) => {
  const { posts, slidePerViewport } = props
  const swiperRef = useRef<SwiperType>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerDown', (asd) => {
        setIsScrolling(true)
      })
      emblaApi.on('pointerUp', (asd) => {
        setIsScrolling(false)
      })
    }
  }, [emblaApi, emblaRef])
  return (
    <div>
      <div className={styles.embla}>
        <div className="rounded-xl overflow-hidden ">
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {posts.map((article) => (
                <div className={styles.embla__slide} key={article.slug}>
                  <div className=" bg-white">
                    <Card doc={article} relationTo="posts" showCategories />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.embla__controls}>
          <div className={styles.embla__buttons}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
              <ChevronLeftIcon className={styles.embla__button__svg} />
            </PrevButton>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
              <ChevronRightIcon className={styles.embla__button__svg} />
            </NextButton>
          </div>
        </div>
      </div>
    </div>
  )
}
