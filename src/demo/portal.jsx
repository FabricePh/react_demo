import {createPortal} from "react-dom";
import {Header} from "../ui/Header.jsx";

export function Portal() {
    return <div>
        <Header />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum id tortor nec convallis. Nulla dignissim ante sit amet metus placerat auctor. Aliquam erat volutpat. Maecenas accumsan ligula sit amet nisi elementum, sit amet congue orci luctus. Proin viverra, ex quis lacinia fringilla, turpis tortor facilisis neque, a pulvinar ligula lectus at nibh. Fusce dui diam, tincidunt convallis rhoncus et, scelerisque et arcu. Nam eu odio ullamcorper, aliquam orci posuere, tristique tellus. Nullam et imperdiet elit. Curabitur placerat accumsan velit, sit amet laoreet urna elementum eget. Praesent vel metus magna. Sed finibus, orci id luctus dictum, erat metus rutrum eros, nec ultrices orci purus feugiat nibh. Curabitur lectus quam, venenatis id euismod a, porttitor nec risus. Cras ultrices nunc eleifend justo posuere, non ornare ante semper.</p>
        <p>Morbi vel pretium nisl. Ut tempus odio sit amet risus semper sagittis. Donec suscipit ipsum vitae erat mollis dapibus. Maecenas at rutrum ante. Aenean pulvinar augue nec imperdiet malesuada. Aliquam euismod nisi in iaculis tempor. Nulla facilisi. Curabitur est justo, egestas ut orci eget, scelerisque sollicitudin quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris efficitur sollicitudin leo, ut aliquam augue vulputate non.</p>
        <Modal />
    </div>
}

function Modal() {
    return createPortal(
        <div style={{ position: "absolute", top: 0, right: 0, padding: 10, border:'1px solid grey', background:"#fff" }}>
            Je suis une modale
        </div>,
        document.body
    );
}
