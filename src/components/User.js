import React, { PropTypes, Component } from 'react'
import Friends from './Friends'
import { Button, Grid,Row,Col,Panel,Navbar,Image,Table,ButtonGroup } from 'react-bootstrap';

export default class User extends Component {

  componentWillMount() {
    setTimeout(this.props.checkAuth  ,  0);
  }

  render() {
    const { name, friends, error ,friendLoad } = this.props
    let template
    let PanelTitle
    PanelTitle =<Navbar.Collapse>
                  <Navbar.Text className='user_name'>
                    {name.first_name} {name.last_name}
                  </Navbar.Text>
                  <Navbar.Text pullRight className='user_id'>
                    id: {name.uid}
                  </Navbar.Text>
                </Navbar.Collapse>
    if (name.first_name) {
      template =<Grid>
                  <Row>
                    <Col xs={10} xsOffset={1}>
                      <Panel header={PanelTitle}>
                        <Row className='show-grid'> 
                          <Col  md={3}>
                            <Image src={name.photo_200_orig} thumbnail />
                          </Col>  
                          <Col  md={9}>
                            <Table responsive>
                              <tbody>
                                <tr>
                                  <td>День рождения:</td>
                                  <td className='inf_clr'>{name.bdate}</td> 
                                </tr>
                                <tr>
                                  <td>город:</td>
                                  <td className='inf_clr'>{name.city}</td> 
                                </tr>
                                <tr>
                                  <td>пол:</td>
                                  <td className='inf_clr'>{name.sex}</td> 
                                </tr>
                                <tr>
                                  <td>Всего друзей:</td>
                                  <td className='inf_clr'>{name.counters.friends}</td> 
                                </tr>
                              </tbody>
                            </Table>
                          </Col> 
                        </Row>
                        <Row className='show-grid'>
                          <Col  md={3}>
                            <ButtonGroup vertical block>
                              <Button className='btn_exit' onClick={this.props.logout}>Выйти</Button>
                            </ButtonGroup> 
                          </Col>
                            <Col  md={9}>
                              <Friends friends={friends} friendLoad={friendLoad}/>
                            </Col>
                        </Row>
                      </Panel>
                    </Col>
                  </Row>
                </Grid>

    } else {
      template = <div className='ent '><button className='btn_in bg_cl' onClick={this.props.handleLogin}>Авторизоваться</button></div>
    }

    return <div >
      {template}
      {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
    </div>
  }
}

User.propTypes = {
  name: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
} 