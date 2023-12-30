import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "@auth0/nextjs-auth0";
import {
  IFilterReq,
  IMassageBox,
  IMsgBoxesPagination,
} from "@/interface/massageBox";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession(req, res);

  if (req.method === "GET") {
    if (session) {
      const { pageNumber, pageSize } = req.query;

      const result = await getInbox({
        pageNumber: Number(pageNumber),
        pageSize: Number(pageSize),
      });

      res.status(200).json(result);
    } else {
      res.status(401).send("Unauthorized");
    }
  } else if (req.method === "POST") {
    try {
      const result = await createInbox(req.body);

      res.status(201).json({ id: result.id });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  } else {
    res.status(404).send("Not found");
  }
}

const createInbox = async (msgBox: IMassageBox) => {
  const result = await prisma.inbox.create({
    data: msgBox,
  });

  return result;
};

const getInbox = async (filter: IFilterReq) => {
  filter.pageNumber = filter.pageNumber - 1;
  const [total, data] = await prisma.$transaction([
    prisma.inbox.count(),
    prisma.inbox.findMany({
      skip: filter.pageNumber * filter.pageSize,
      take: filter.pageSize,
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  const totalPages = Math.ceil(total / filter.pageSize);

  const result: IMsgBoxesPagination = {
    massageBoxes: data,
    currentPage: filter.pageNumber,
    totalPages: totalPages,
    totalRecords: total,
  };

  return result;
};
