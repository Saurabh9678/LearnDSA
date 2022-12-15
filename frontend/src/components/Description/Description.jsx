import React, { useEffect } from "react";
import "./Description.css";
import { useParams } from "react-router-dom";
import { getContentDetails } from "../../actions/contentActions";
import { useSelector, useDispatch } from "react-redux";

const Description = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.contentDetails);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getContentDetails(id));
    console.log(id);
  }, [dispatch, id]);

  return (
    <div>
      <div className="DescriptionContainer">
        <div className="DescriptionNav">
          <div>
            <a href="/">Description</a>
          </div>
          <div>
            <a href="/">Solution</a>
          </div>
        </div>
        <div className="Description">
          <h2>Description Part</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            pariatur! Repudiandae adipisci quis repellendus minima enim
            reprehenderit nesciunt, hic, incidunt placeat quisquam magni
            consectetur totam quibusdam eum harum quia autem inventore veritatis
            minus? Natus consectetur enim est facilis necessitatibus odio saepe
            quasi laudantium dolorem rem placeat quia omnis explicabo maxime, ad
            dolorum consequuntur soluta earum atque tenetur? Sint dicta officia
            repellat cupiditate tempora omnis minima nisi est neque repudiandae
            harum, voluptate nemo quibusdam deleniti reiciendis. Explicabo nam
            qui, doloremque, odit inventore sapiente placeat officiis dolorum
            dolores perspiciatis reiciendis fugiat nemo, facilis ea distinctio
            sit quasi architecto porro. Architecto mollitia quos qui sequi
            veritatis aliquid quas quae nostrum nemo perspiciatis maxime at ut
            modi facilis, totam dolor? Natus inventore quisquam adipisci
            temporibus nam sit voluptatem mollitia, vel officiis eligendi
            ratione vitae quaerat autem odio ut velit accusantium dolore
            perspiciatis illo quo possimus eaque dolor molestiae! Dolores,
            nesciunt. Id non cupiditate, consectetur repellat nisi optio dolores
            tempora! Veniam rerum voluptas nostrum laborum porro, sed amet
            possimus optio ipsa, beatae rem ipsum cupiditate inventore dolores
            enim iusto laboriosam ab qui tempora iure? Rerum deserunt nam
            mollitia impedit aliquid aliquam porro non sint nobis commodi odit
            asperiores fugiat ab, natus itaque vitae! Totam, quis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
