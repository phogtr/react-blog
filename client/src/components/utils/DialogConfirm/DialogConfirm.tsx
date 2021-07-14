import { Box, Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import React from "react";

interface DialogConfirmProps {
  openDialog: boolean;
  prompt: string;
  isDeleteBtn?: boolean;
  handleCloseDialog: () => void;
  handleCloseDialogConfirm: () => void;
}

export const DialogConfirm: React.FC<DialogConfirmProps> = ({
  openDialog,
  prompt,
  isDeleteBtn,
  handleCloseDialog,
  handleCloseDialogConfirm,
}) => {
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">{prompt}</DialogTitle>
      <Box display="flex" justifyContent="center">
        <DialogActions>
          <Button onClick={handleCloseDialogConfirm}>Confirmed</Button>
          {isDeleteBtn ? (
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
            </DialogActions>
          ) : null}
        </DialogActions>
      </Box>
    </Dialog>
  );
};
