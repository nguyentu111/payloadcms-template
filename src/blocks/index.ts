import { ArchiveCarousel } from './ArchirveCarousel/config'
import { Archive } from './ArchiveBlock/config'
import { Banner } from './Banner/config'
import { BreadCrumb } from './BreadCrumb/config'
import { CallToAction } from './CallToAction/config'
import { Code } from './Code/config'
import { FormBlock } from './Form/config'
import { Hero } from './Hero'
import { MediaBlock } from './MediaBlock/config'
import { PostAttributes } from './PostAttributes/config'
import { Text } from './Text/config'
import { Link } from './Link/config'
import { Template } from './Template/config'
import { RichText } from './Richtext/config'
export const clientBlocks = [
  Banner,
  BreadCrumb,
  CallToAction,
  Code,
  FormBlock,
  Hero,
  MediaBlock,
  PostAttributes,
  Text,
  Template,
  Link,
  RichText,
]

export const serverBlocks = [Archive, ArchiveCarousel]
