import { Button, Grid } from "@mui/material";

import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Header /> */}

      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: "1",
        }}
      >
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
          <h2>Inventory Store</h2>
        </div>
      </div>

      <Grid container>
        <Grid item sm={12} xs={12} lg={6} md={12} xl={6}>
          <div
            style={{
              padding: "20px",
              marginTop: "120px",
              fontFamily: "sans-serif",
            }}
          >
            <h1>
              Our New <br /> website is Here <br /> to use
            </h1>
            <br />
            <h5>Create New Shops & Explore Awesome Products</h5>

            <div>
              <Button
                onClick={() => navigate("/")}
                style={{ marginTop: "30px", padding: "20px" }}
                variant="contained"
              >
                Let's Begin
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item sm={12} xs={12} lg={6} md={12} xl={6}>
          <div style={{ margin: "20px" }}>
            <img
              src="https://media.istockphoto.com/vectors/boy-runs-with-empty-shopping-cart-vector-illustration-vector-id1272924028?b=1&k=20&m=1272924028&s=612x612&w=0&h=aj4yj7wBEUEs6ATu94B7A3e8En64LJviGSqjL4lB5WE="
              style={{ boxShadow: "3px 3px 2px 1px rgba(0, 0, 0, 0.2)" }}
            />
          </div>
        </Grid>
      </Grid>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic odit eaque
        accusamus dolorum dolore perferendis, illo repudiandae fugiat ipsam
        dolorem quod, temporibus laboriosam pariatur enim autem maxime et dolor
        sequi sapiente ipsa inventore quibusdam! Veniam eveniet recusandae
        quidem unde! Ex modi voluptatibus ducimus doloribus corrupti debitis,
        sint, beatae nam explicabo earum eos exercitationem libero labore
        possimus dolores assumenda aperiam eligendi nulla vero accusamus enim.
        Facilis qui incidunt libero architecto enim corrupti laborum ipsum eos
        eaque tenetur quisquam vero exercitationem suscipit beatae, voluptatum
        et tempora doloribus! Rerum aspernatur accusantium commodi, mollitia id
        non ratione debitis ab cupiditate tempore repellendus eveniet iure at ut
        consequuntur ex, aliquid maxime minus autem! Odit debitis, nobis
        doloribus doloremque beatae velit. Tempora, ipsam ad pariatur labore
        facere voluptates id exercitationem minima praesentium ipsum earum
        aperiam? Fugit sed quas, necessitatibus natus recusandae quis nostrum
        aspernatur earum! Dolores labore fugit, ad repudiandae eveniet sapiente
        ex necessitatibus, quod provident, eos tenetur iste pariatur minus.
        Fugit eos nesciunt, atque laudantium expedita esse vitae sed similique
        qui distinctio porro soluta voluptas rerum sit odio dolores? Odit
        doloribus laudantium quas delectus quo a numquam expedita nemo velit
        possimus tenetur tempora, praesentium perspiciatis laboriosam quibusdam
        accusamus suscipit repudiandae sed minima reiciendis vero? Veritatis
        maxime laudantium, sapiente atque dolorum praesentium, saepe corrupti
        deleniti quibusdam, magnam quo odit. Cupiditate, impedit cum ipsum qui
        rem culpa. Minus aliquam quia dolorum doloremque impedit temporibus
        facilis. Quibusdam sequi officiis, laboriosam est reiciendis harum
        libero ad ex animi, sapiente et cupiditate ipsa consequatur adipisci
        minus corporis esse aperiam architecto. Est deleniti amet velit
        voluptatibus fuga, provident quos, quae ratione non reiciendis nisi cum
        eius, aperiam nam in voluptates fugiat. Praesentium, mollitia aliquid!
        Impedit tempora, quae voluptate deserunt enim mollitia perspiciatis
        magnam eius debitis, placeat modi minima quas nemo voluptates sed fugiat
        ex iste quaerat exercitationem obcaecati suscipit! Ex sed esse enim
        facilis qui. Repellat, assumenda. Expedita minima asperiores ipsam
        dolore ipsa debitis eaque quos sit excepturi. Magnam esse autem illum a
        aut nam unde nihil, consequatur id laudantium numquam quas rem optio
        deserunt laboriosam asperiores error tenetur ullam corrupti voluptatem
        totam! Quam, sint nostrum tempora asperiores repellendus quis natus
        velit temporibus doloremque fugit at, cum incidunt praesentium nisi unde
        officiis labore. Obcaecati laudantium adipisci dolore, tempora inventore
        molestiae nesciunt repellendus enim praesentium soluta facilis esse
        reprehenderit fugiat placeat dignissimos. Officiis, impedit quos!
        Placeat impedit quidem iusto a quibusdam. Dolor sunt, ut similique eos,
        incidunt numquam porro voluptatem dolores minus perspiciatis molestias
        placeat in consectetur hic voluptas, rerum reprehenderit dolorum aut
        facere neque! Quas optio ratione quo! Debitis at aspernatur, quia ex,
        harum soluta omnis ipsa dolorum amet facere sapiente blanditiis maxime,
        fuga praesentium deserunt officia laborum nostrum! Enim quo veniam
        blanditiis animi, eum dolorem autem aliquam nulla molestiae? Sed
        cupiditate commodi saepe quam voluptate eos natus exercitationem
        deleniti numquam autem, atque illum. Aliquid, alias! Odio ab omnis, aut
        libero error possimus necessitatibus repellendus, iure tempora dolore
        inventore perferendis hic, enim esse ad? Maxime ullam tenetur sed ipsam
        iste deleniti est iusto, fugit, nobis sequi, praesentium recusandae quis
        unde suscipit!
      </p>
    </div>
  );
}
