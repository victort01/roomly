import { prisma } from '../database/prisma';
import { Quarto } from '../generated/prisma';

type QuartoCreateData = Omit<Quarto, 'id'>|