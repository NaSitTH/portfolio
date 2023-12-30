-- CreateTable
CREATE TABLE "Inbox" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "massage" TEXT,

    CONSTRAINT "Inbox_pkey" PRIMARY KEY ("id")
);
