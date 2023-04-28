<script setup lang="ts">
const el = ref();
</script>

<template>
  <div>
    <LegoPageProgress :target="el" v-slot="{ progress }">
      <div class="fixed top-0 h-3 bg-gray-200 w-screen">
        <div
          class="h-full bg-blue-300"
          :style="{ width: progress + '%' }"
        ></div>
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
