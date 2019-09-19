import React, { Component } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from './dialog';
import { Skeleton, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
export class main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tileData:[
                 {
                     img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                     title:"Paciente 1",
                    author:"Jose Luis"
                 }
                 ,
                 {
                    img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                    title:"Paciete 2",
                   author:"Jose Luis"
                }
                ,{
                    img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                    title:"Paciente 3",
                   author:"Jose Luis"
                }, {
                    img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                    title:"Paciente 1",
                   author:"Jose Luis"
                }
                ,
                {
                   img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                   title:"Paciete 2",
                  author:"Jose Luis"
               }
               ,{
                   img:"http://www.caritas.hn/wp-content/uploads/2018/02/HONDURAS-LOGO.jpg",
                   title:"Paciente 3",
                  author:"Jose Luis"
               }
             ],
             open:false,
             Nombre:"Jose",
             loading: false,
        }
    }

  
  
    handelonClick=(input,value)=>{
    this.setState({[input]:[value]});
    console.log(value);
    }
    handleClickOpen = () => {
        this.setState({ open: true });
        console.log(this.state.open);
    };
    handleClose = () => {
        this.setState({ open: false });
      };
    
    render() {
      const {open,Nombre}=this.state;
      const vals={open,Nombre};
      const { loading } = this.state;
        return (
            <div>
              <Dialog handleClickOpen={this.handleClickOpen} handleClose={this.handleClose} vals={vals}/>
                <h1><strong>Pacientes Recientes</strong></h1>
                <div style={{justifyContent: 'space-around', overflow: 'hidden'}}>
             <GridList style={{ flexWrap: 'nowrap',
              // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
              transform: 'translateZ(0)'}} cols={4.01}  onClick={this.handleClickOpen}>
              {this.state.tileData.map(tile => (
           <GridListTile key={tile.img}>   
        <Card
        style={{ width: "100%"}}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>



                
              
                </GridListTile>
        ))}
        </GridList>
    </div>
            </div>
        )
    }
}

export default main




/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
/*import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class App extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);*/
