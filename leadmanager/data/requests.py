from google.analytics.data_v1beta.types import DateRange
from google.analytics.data_v1beta.types import Dimension
from google.analytics.data_v1beta.types import Metric
from google.analytics.data_v1beta.types import RunReportRequest
from google.analytics.data_v1beta.types import BatchRunReportsRequest
from google.analytics.data_v1beta.types import OrderBy

from datetime import date

start_date = '2024-02-25'
end_date = str(date.today())
property_id = '429909365'

country_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="country")],
        metrics=[Metric(name="averageSessionDuration"),
                 Metric(name="activeUsers"),
                 Metric(name='sessions')],
        order_bys = [OrderBy(dimension = {'dimension_name': 'country'}, desc=False)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

daily_metrics_comparison_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="date")],
        metrics=[Metric(name="newUsers"),
                 Metric(name="activeUsers"),
                 Metric(name='sessions')],
        order_bys = [OrderBy(dimension = {'dimension_name': 'date'}, desc=False)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

traffic_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="week"),
                    Dimension(name="sessionMedium")],
        metrics=[Metric(name="averageSessionDuration"),
                 Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'week'}),
                    OrderBy(dimension = {'dimension_name': 'sessionMedium'})],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )


mobileDeviceModel_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="mobileDeviceModel")],
        metrics=[Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

search_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="week")],
        metrics=[Metric(name="organicGoogleSearchAveragePosition"),
                 Metric(name="organicGoogleSearchClickThroughRate"),
                 Metric(name="organicGoogleSearchClicks"),
                 Metric(name="organicGoogleSearchImpressions")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'week'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

userGender_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="userGender")],
        metrics=[Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

batch_request = BatchRunReportsRequest(
    property='properties/'+property_id,
    requests = [traffic_request, daily_metrics_comparison_request,country_request,search_request]
)