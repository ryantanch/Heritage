import React, { Component } from 'react';
import axios from 'axios';
import ArtifactCard from "../components/ArtifactCard";
import {CardDeck} from "react-bootstrap";


class ViewArtifact extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {}
        }
    }

    componentDidMount(){

        var url = '/api/users/' + this.props.match.params.id;
        axios.get(url)
            .then((resp) =>{
                this.setState({data: resp.data[0]})
            })

    }

    render() {
        return(
            <container>
                <h2>View Artifact in {this.state.data.year}</h2>
                <CardDeck>
                    <ArtifactCard
                        title={'Family photo of Theodore and Helen'}
                        link="/photos/1"
                        img="https://www.dropbox.com/preview/Sterling%20Artifacts/Photos/photo_1-2.jpg?role=personal"
                    />
                    <ArtifactCard
                        title={"Theodore's mother"}
                        link="/photos/2"
                        img="https://previews.dropbox.com/p/thumb/AAibcZPXiio5bkhY_EDz5OJqBSgFUaL3AVnn4w7vLZMItK8VLlYjCK9ZhU-cTDFY9sF0p_s21Q5Vb0it80Utkl_qYj78LPmMeCTdkgUHFDBfZAKLqfLkOQ5_MX_He67LuSQjK0UwlJAKim7T-yR0vg60uk4m6ufrwKbGb_W_4vc_bxcqMzxPAs5285pahlEPN-jCyok26F9JMN4h9NplM-n8RDAMZXHI6431znS1PRwAvd9ajLAfNK1GHAF2-Fh54ZHniK8FSlBOg0JNFD9Zmp2tMFcTb4BkSe_6bsrWQuRxDwrVixxafemvdSFj15iHpr_X74oEp3H-JckvVJm3I35kbFMRAWPmHOER-32CIA0LJw/p.jpeg"
                    />
                    <ArtifactCard
                        title={'Family in Poland (Theodore and Helen)'}
                        link="/photos/3"
                        img="https://previews.dropbox.com/p/thumb/AAhwHZdCYQ0K5cyyr1UWLGiYj7JWHpZCjeI2UHJrqs7HEcSMKxNOWQwVBCwvDtZrGEWpJtCNjMe3VDwp6aOH6tmukNpyWXL2aKwar-_53XdYWxFvxjioxP4PpIaYLdp22Uu218hm076X0is2y4F2QJwu7eKtPpcVN7USLOU6p4qPG2otc6yomuXJB1jrDNUyRRrHZ0yBcyqIYuUwVGl7ZjsYXrsSwbh3iobgkje8h3rzctdBoJuPypJfJ12A_CJe3wWZOZNWuBXZP50VXNIyuzF8akukYOgZOxLZeG6GeVKJTO20my2CzqF1cX2DjYyZpgmXI8dt5NohRadVI8xqQO2YLoEkrrXcaFc1kOWbMrDPgg/p.jpeg"
                    />
                    <ArtifactCard
                        title={'Bernard and Friend'}
                        link="/photos/4"
                        img="https://previews.dropbox.com/p/thumb/AAgiP6qRWsxIuaXHJNMm4TpfjaPKyCumQWeyXSsrjzovYpK3VKQUr3auTSef40tT2MIr5Y22oZ2tZshGK_wd3B1DKswnbZT96tUyWWwxqdsWlz6hjI8gTyhwl9IiPxU6ktQxfhYpPAbwNwHNW6MFfBTtJCXGTK_4E3ZYydAW4PcQ_VjdExjE_0yfw8Fcbb1dFKWXhF_yczO4HRnBJdj97pSCCQa6sArqk_UuaSf4mo9Rg2P3-5MDQ_DNtKMyTintfSkApVhAuRkuuwOoxZeGKVN6FgH2Q5tc2XJ33qLlkIeIZD59WGXA6a58fJe8DecG1V3X0J3WcUTZR3WqPUoTC38ehAS_fsgfzxEdXcloqoTBPA/p.jpeg"
                    />
                </CardDeck>

            </container>

        )
    }
}

export default ViewArtifact;
