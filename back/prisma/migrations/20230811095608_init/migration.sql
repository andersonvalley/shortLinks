/*
  Warnings:

  - A unique constraint covering the columns `[original_link]` on the table `Links` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Links_original_link_key" ON "Links"("original_link");
