<script setup lang="ts">
const el = ref();
</script>

<template>
  <div class="relative">
    <LegoPageProgress v-slot="{ progress }" :target="el">
      <div
        class="absolute -left-6 bottom-0 rounded-xl h-full w-2.5 bg-gray-100 overflow-hidden"
      >
        <div class="w-full bg-blue-300" :style="{ height: progress + '%' }" />
      </div>
    </LegoPageProgress>

    <div ref="el">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </p>
    </div>
  </div>
</template>
