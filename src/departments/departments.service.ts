import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDto } from './departments.dto';

@Injectable()
export class DepartmentsService {

  @InjectRepository(Department)
  private readonly repository: Repository<Department>;

  public getAllUsers(): Promise<Department[]> {
    return this.repository.find();
  }

  public getUser(id: number): Promise<Department> {
    return this.repository.findOne({
      where: [
        {id: id}
      ]
    });
  }

  public createUser(body: CreateDepartmentDto): Promise<Department> {
    const user: Department = new Department();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }

  }
