-- CreateIndex
CREATE INDEX "categories_name_id_idx" ON "categories"("name", "id");

-- CreateIndex
CREATE INDEX "products_categoryId_id_idx" ON "products"("categoryId", "id");
