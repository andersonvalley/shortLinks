import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) { }

  async create(createLinkDto: CreateLinkDto) {
    const { originalLink } = createLinkDto;

    const link = await this.prisma.links.findUnique({
      where: { original_link: checkHttpLink(originalLink) },
    });

    if (link) return { shortLink: link.short_link, originalLink: createLinkDto.originalLink };

    const createdLink = await this.prisma.links.create({
      data: {
        original_link: checkHttpLink(originalLink),
      },
    });

    const shortLink = makeShortLink(createdLink.id);

    await this.prisma.links.update({
      where: { id: createdLink.id },
      data: { short_link: shortLink },
    });

    return { shortLink, originalLink: createLinkDto.originalLink };
  }

  async redirect(id: string) {
    const link = await this.prisma.links.findUnique({
      where: { id: +id }
    })

    if (!link) throw new NotFoundException('Ссылка не найдена');

    return { url: link.original_link, statusCode: 301 };
  }
}

function makeShortLink(id: number) {
  return 'https://' + process.env.APP_HOST + ':' + process.env.APP_PORT + '/' + id;
}

function checkHttpLink(originalLink: string) {
  let fullUrl = ''
  if (!originalLink.startsWith('http://') && !originalLink.startsWith('https://')) {
    fullUrl = 'https://' + originalLink;
  } else {
    fullUrl = originalLink
  }

  return fullUrl
}