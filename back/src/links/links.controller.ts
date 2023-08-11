import { Body, Controller, Get, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';

@Controller('')
export class LinksController {
  constructor(private readonly linksService: LinksService) { }

  @Post()
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get('/:id')
  async redirect(@Param('id') id: string, @Res() res: Response) {
    const data = await this.linksService.redirect(id);

    if (!data) {
      throw new NotFoundException('Ссылка не найдена');
    }

    res.redirect(data.statusCode, data.url);
  }
}
