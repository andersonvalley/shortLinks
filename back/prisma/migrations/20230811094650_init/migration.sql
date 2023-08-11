-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "original_link" TEXT NOT NULL,
    "short_link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);
