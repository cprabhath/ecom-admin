// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    processing: true,
    serverSide: true
  });
});
