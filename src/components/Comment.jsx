import {
    ButtonGroup,
    Card,
    CardContent,
    Grid,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import React from 'react'
import Button from './Button'

const Comment = ({
    comment,
    onDelete,
    handleEdit,
    editMode,
    editedContent,
    setEditedContent,
    handleConfirmEdit,
}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {comment.user.name}
                </Typography>
                {editMode === comment.id ? (
                    // 編集中のコメントの場合
                    <TextareaAutosize
                        minRows={3}
                        style={{ width: '100%' }}
                        value={editedContent}
                        onChange={e => {
                            setEditedContent(e.target.value)
                        }}
                    />
                ) : (
                    <>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            gutterBottom
                            paragraph>
                            {comment.content}
                        </Typography>
                    </>
                )}

                <Grid container justifyContent="flex-end">
                    {editMode === comment.id ? (
                        <Button onClick={() => handleConfirmEdit(comment.id)}>
                            編集確定
                        </Button>
                    ) : (
                        <ButtonGroup>
                            <Button onClick={() => handleEdit(comment)}>
                                編集
                            </Button>
                            <Button
                                color="error"
                                onClick={() => onDelete(comment.id)}>
                                削除
                            </Button>
                        </ButtonGroup>
                    )}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Comment
