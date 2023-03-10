-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
