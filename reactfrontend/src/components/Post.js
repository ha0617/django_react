import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Post extends Component {

    _onDelete = () => {
        this.props.Delete(this.props.id)
    }

    render() {
        const card_style = {
            margin : "1rem",
            padding : "1rem"
        }
        return (
            <div>
                <Card style={card_style}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            글 번호 : {this.props.id}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            글 제목 : {this.props.title}
                        </Typography>
                        <Typography color="textSecondary">
                            글 내용 : {this.props.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this._onDelete}>글 삭제</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}