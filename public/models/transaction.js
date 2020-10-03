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
  var Transaction = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Transaction, _Model);

    var _super = _createSuper(Transaction);

    function Transaction() {
      (0, _classCallCheck2["default"])(this, Transaction);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Transaction, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      value: function associate(models) {
        // define association here
        Transaction.belongsTo(models.Orders, {
          foreignKey: 'order_id'
        });
        Transaction.belongsTo(models.User, {
          foreignKey: 'transactedBy'
        });
      }
    }]);
    return Transaction;
  }(Model);

  ;
  Transaction.init({
    type: DataTypes.ENUM('momo', 'card'),
    phone_number: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    transactedBy: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER
  }, {
    sequelize: sequelize,
    modelName: 'Transaction'
  });
  return Transaction;
};