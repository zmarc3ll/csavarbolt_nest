import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import CsavarData from './CsavarData';
import RendelesData from './RendelesData';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('csavar')
  async csavarList() {
    const csavarbolt = this.dataSource.getRepository(CsavarData);
    return await csavarbolt.find();
  }

  @Post('csavar')
  createCsavar(@Body() csavar: CsavarData) {
    csavar.id = undefined;
    const csavarbolt = this.dataSource.getRepository(CsavarData);
    csavarbolt.save(csavar);
  }

  @Delete('csavar/:id')
  deleteCsavar(@Param('id') id: number) {
    const csavarbolt = this.dataSource.getRepository(CsavarData);
    csavarbolt.delete(id);
  }

  @Post('api/csavar/:id/rendeles')
  async csavarRendel(
    @Body() rendeles: RendelesData,
    @Param('id') csavarId: number,
  ) {
    const rendelesRep = this.dataSource.getRepository(RendelesData);
    rendeles.id = undefined;
    rendeles.csavar_id = csavarId;
     const csavarRep = this.dataSource.getRepository(CsavarData);
    const rendeltCsavarok = await csavarRep.findOneBy({ id: csavarId });
    rendeltCsavarok.keszlet = rendeltCsavarok.keszlet - rendeles.db;
    csavarRep.save(rendeltCsavarok);
    rendelesRep.save(rendeles);
  }

  @Get('api/csavar/rendeles')
  async listRendeles() {
    const rendelesRep = this.dataSource.getRepository(RendelesData);
    return await rendelesRep.find();
  }

  @Delete('api/csavar/rendeles/:id')
  deleteRendeles(@Param('id') id: number) {
    const rendelesRep = this.dataSource.getRepository(RendelesData);
    rendelesRep.delete(id);
  }
}
