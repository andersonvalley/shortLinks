import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';

@Module({
  controllers: [LinksController],
  providers: [LinksService, PrismaService],
})
export class LinksModule { }
