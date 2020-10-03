'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('sequelize'),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
  var Orders = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Orders, _Model);

    var _super = _createSuper(Orders);

    function Orders() {
      (0, _classCallCheck2["default"])(this, Orders);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Orders, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      value: function associate(models) {
        // define association here
        Orders.belongsTo(models.User, {
          foreignKey: 'orderedBy'
        }); // Orders.belongsTo(models.Product, { foreignKey: 'productId' });

        Orders.hasMany(models.Transaction, {
          foreignKey: 'order_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
      }
    }]);
    return Orders;
  }(Model);

  ;
  Orders.init({
    orderedBy: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    product: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    currency: DataTypes.STRING,
    ordered_quantity: DataTypes.INTEGER,
    payment_options: DataTypes.STRING,
    bonus: DataTypes.STRING,
    deliveredDistrict: DataTypes.STRING,
    deliveredSector: DataTypes.STRING,
    deliveredLocation: DataTypes.STRING,
    status: DataTypes.ENUM('pending', 'payed', 'delivered', 'canceled', 'discounted'),
    due_time: DataTypes.DATE
  }, {
    sequelize: sequelize,
    modelName: 'Orders'
  });
  return Orders;
};