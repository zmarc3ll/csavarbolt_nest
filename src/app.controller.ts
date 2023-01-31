import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import CsavarData from './CsavarData';

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

  @Post('csavar/:id/rendeles')
  orderCsavar(@Param('id') id: number) {
    const csavarbolt = this.dataSource.getRepository(CsavarData);

  }

}
