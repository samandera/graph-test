angular.module('app')
  .directive('pieChart', ['$window', function($window){
    var link = function(scope, element, attrs){
      function updateLabelsColors(){
          var lines = element.find('div > div:nth-child(1) > div > svg > g:nth-child(5) > g:nth-child(even) > path');
          var lines2 = element.find('div > div:nth-child(1) > div > svg > g:nth-child(4) > g:nth-child(even) > path');
          lines.attr('stroke', 'white');
          lines.attr('stroke-width', 2);
          lines2.attr('stroke', 'white');
          lines2.attr('stroke-width', 2);
      }

      function drawChart(dataTable, options) {
        var data = google.visualization.arrayToDataTable(dataTable);
        var chart = new google.visualization.PieChart(element[0]);
        chart.draw(data, options);
        setTimeout(function(){
          updateLabelsColors();
        }, 20);
        google.visualization.events.addListener(chart, "onmouseover", updateLabelsColors);
        google.visualization.events.addListener(chart, "onmouseout", updateLabelsColors);
      }
      function onResize(){
        drawChart(scope.data, scope.options);
      }
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(function(){
        drawChart(scope.data, scope.options);
        scope.$watch('data', function(value){
          drawChart(value, scope.options);
        });
      });

      angular.element($window).bind('resize', onResize);
      scope.$on('$destroy', function(e){
        angular.element($window).unbind('resize', onResize);
      });
    };
    var directive = {
      restrict: 'E',
      replace: true,
      scope: {
        data: '=data',
        options: '=options'
      },
      template: '<div class="piechart"></div>',
      link: link
    };
    return directive;
  }]);
