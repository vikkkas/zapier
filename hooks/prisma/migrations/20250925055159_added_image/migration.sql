-- AlterTable
ALTER TABLE "public"."AvailableActions" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "public"."AvailableTriggers" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "public"."Zap" ALTER COLUMN "userId" DROP DEFAULT;
