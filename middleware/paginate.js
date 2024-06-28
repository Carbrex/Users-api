function paginate(req, res, next) {
  const page = parseInt(req.query.page?.toString() ?? "") || 1;
  let limit = parseInt(req.query.limit?.toString() ?? "") || 5;
  limit = Math.min(limit, 100);
  limit = Math.max(limit, 1);
  const skip = (page - 1) * limit;

  req.pagination = { skip, limit, page };

  next();
}

module.exports = paginate;
