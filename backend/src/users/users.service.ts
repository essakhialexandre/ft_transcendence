import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getFriends(friendIds: number[]) {
    return this.prisma.user.findMany({
      where: {id: {in: friendIds}},
      select: {
        id: true,
        username: true,
        avatar: true,
        userStatus: true,
      }
    })
  }

  async addFriend(id: number, friendId: number)
  {
    return this.prisma.user.update({
      where: { id },
      data: { friendList: {push: friendId}}
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update( {
      where : { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete( {
      where : { id },
    });
  }
}
