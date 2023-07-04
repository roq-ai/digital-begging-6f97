import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { beggarValidationSchema } from 'validationSchema/beggars';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.beggar
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getBeggarById();
    case 'PUT':
      return updateBeggarById();
    case 'DELETE':
      return deleteBeggarById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBeggarById() {
    const data = await prisma.beggar.findFirst(convertQueryToPrismaUtil(req.query, 'beggar'));
    return res.status(200).json(data);
  }

  async function updateBeggarById() {
    await beggarValidationSchema.validate(req.body);
    const data = await prisma.beggar.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteBeggarById() {
    const data = await prisma.beggar.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
