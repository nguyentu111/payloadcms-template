import { ArchiveCarousel } from './ArchirveCarousel/config'
import { Archive } from './ArchiveBlock/config'
import { Banner } from './Banner/config'
import { BreadCrumb } from './BreadCrumb/config'
import { CallToAction } from './CallToAction/config'
import { Code } from './Code/config'
import { Content } from './Content/config'
import { FormBlock } from './Form/config'
import { Hero } from './Hero'
import { MediaBlock } from './MediaBlock/config'
import { PostContent } from './PostContent/config'
import { PostTitle } from './PostTitle/config'
import { Richtext } from './Richtext/config'
import { Layout } from './Layout/config'
export const clientBlocks = [
  Banner,
  BreadCrumb,
  CallToAction,
  Code,
  Content,
  FormBlock,
  Hero,
  MediaBlock,
  Richtext,
  PostTitle,
  PostContent,
  Layout,
]
export const serverBlocks = [Archive, ArchiveCarousel]
