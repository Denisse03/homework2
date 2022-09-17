var homeContent = `<div class="banner"></div>

<div class="text">
  <div class="text1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
    dolor nisi quibusdam. Facilis reiciendis qui velit iure, commodi
    exercitationem corrupti rem officia, quidem voluptatum veniam voluptas
    natus nihil dicta. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Reiciendis mollitia in quia cupiditate neque labore eum placeat
    fugiat animi beatae quam soluta, ullam voluptatum atque dicta eos.
    Ducimus, molestiae corrupti! Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Illo quae dolore porro, natus animi mollitia
    eligendi dicta libero. Odit similique animi reprehenderit nam ullam
    assumenda a est doloribus eius nulla.
  </div>
  <div class="text1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
    dolor nisi quibusdam. Facilis reiciendis qui velit iure, commodi
    exercitationem corrupti rem officia, quidem voluptatum veniam voluptas
    natus nihil dicta. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Reiciendis mollitia in quia cupiditate neque labore eum placeat
    fugiat animi beatae quam soluta, ullam voluptatum atque dicta eos.
    Ducimus, molestiae corrupti! Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Illo quae dolore porro, natus animi mollitia
    eligendi dicta libero. Odit similique animi reprehenderit nam ullam
    assumenda a est doloribus eius nulla.
  </div>
</div>`;

var aboutContent = `<div class="photos">
<div class="photo1"></div>
<div class="photo2"></div>
<div class="photo3"></div>
</div>

<div class="texts">
<div class="text4">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
  aliquam suscipit fuga possimus earum facere unde assumenda odit
  impedit magnam! Dolores necessitatibus molestiae quo odio accusamus
  ratione deserunt beatae consequuntur? Lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Quam libero, laborum, obcaecati
  suscipit labore quo, cupiditate magnam omnis at sit aperiam
  necessitatibus voluptatem laudantium ab aspernatur id voluptatibus
  asperiores quod.
</div>

<div class="text5">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
  iste iure! Accusamus corrupti et aliquid consequatur odio eius, itaque
  magni reprehenderit nihil aut quibusdam consectetur quaerat iure
  adipisci voluptatem dolor. Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Debitis, ratione facere. Perspiciatis autem, ab,
  modi nam accusamus quam nesciunt voluptates distinctio blanditiis quos
  facere, enim cumque quibusdam labore iusto sapiente.
</div>
</div>`;

var productContent = ` <div class="logo"></div>

<div class="flower">
  <div class="pic1"></div>
  <div class="pic2"></div>
</div>

<div class="sentence">
  <div class="text6">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ex eum
    voluptatibus enim. Commodi est ad explicabo in odio nam doloremque
    obcaecati tempora quisquam asperiores, quas beatae voluptate voluptas
    reiciendis?
  </div>
  <div class="text7">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum
    sapiente sit vero deserunt voluptas quo sint beatae, molestias saepe
    itaque iusto rerum blanditiis dolor aliquam neque debitis. Amet,
    doloribus!
  </div>
</div>`;

var contactContent = ` <div class="animal">
<div class="bird"></div>
<div class="fox"></div>
</div>
<div class="animal">
<div class="bird"></div>
<div class="fox"></div>
</div>

<div class="para">
<div class="text9">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui et, quos
  repellat accusamus voluptatem quo quia facere. Numquam optio,
  necessitatibus, commodi unde, voluptatum eum consectetur cum earum
  excepturi sit reiciendis! Lorem ipsum, dolor sit amet consectetur
  adipisicing elit. Quaerat doloribus odio temporibus explicabo sunt
  quidem reiciendis voluptatum facilis! Adipisci labore quis
  necessitatibus corporis nisi fugit deserunt officia eligendi rem
  quidem?
</div>
<div class="text10">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  consequatur adipisci quos sapiente modi vitae rerum labore unde quidem
  similique quaerat, aliquam porro sunt eligendi? Tempore obcaecati
  repellat quas consequatur. Lorem ipsum dolor, sit amet consectetur
  adipisicing elit. Earum, corrupti adipisci! Rem aliquam tempore
  perferendis. Illo ullam commodi reprehenderit totam adipisci rem!
  Libero, amet placeat. Distinctio expedita commodi tenetur animi?
</div>
</div>`;

export function pageContent(pageID) {
  let contentName = pageID + "Content";
  console.log(pageID);
  $("#app").html(eval(contentName));
}
