import { Controller, Get, Param, UseGuards, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PatientTreatmentsService } from './patient-treatments.service';
import { PatientTreatment } from './entities/patient-treatment.entity';
import { EmailService } from '@/modules/email/email.service';

@ApiTags('patient-treatments')
@ApiBearerAuth('bearer')
@Controller('patient-treatments')
@UseGuards(JwtAuthGuard)
export class PatientTreatmentsController {
  constructor(
    private readonly patientTreatmentsService: PatientTreatmentsService,
    private readonly emailService: EmailService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all patient treatments' })
  @ApiResponse({
    status: 200,
    description: 'Return all patient treatments',
    type: PatientTreatment,
    isArray: true,
  })
  findAll(): PatientTreatment[] {
    return this.patientTreatmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a patient treatment by id' })
  @ApiResponse({
    status: 200,
    description: 'Return a patient treatment by id',
    type: PatientTreatment,
  })
  findOne(@Param('id') id: string): PatientTreatment {
    return this.patientTreatmentsService.findOne(+id);
  }

  @Post('send-payment-status-update')
  @ApiOperation({ summary: 'Send payment status update email' })
  @ApiResponse({
    status: 200,
    description: 'Payment status update email sent successfully',
  })
  async sendPaymentStatusUpdate() {
    const treatmentIds = ['TRTMNT013801821', 'TRTMNT02983798', 'TRTMNT08979798'];
    const amount = 6775.25;

    await this.emailService.sendPaymentStatusUpdateEmail(
      'patrickpolicarpio08@gmail.com',
      'Patrick Policarpio',
      treatmentIds,
      amount,
    );

    return { message: 'Payment status update email sent successfully' };
  }
}
