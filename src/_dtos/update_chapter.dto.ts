import { PartialType } from '@nestjs/mapped-types';
import { CreateChapterDto } from './create_chapter.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateChapterDto extends PartialType(CreateChapterDto) {
  @IsOptional()
  @IsBoolean()
  isPremium?: boolean;
}
