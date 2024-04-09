# Data and Visualization
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Date and Time
from datetime import date
from datetime import timedelta

# Google Analytics
import os
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import DateRange
from google.analytics.data_v1beta.types import Dimension
from google.analytics.data_v1beta.types import Metric
from google.analytics.data_v1beta.types import RunReportRequest
from google.analytics.data_v1beta.types import OrderBy

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'zenzonemedia-1697472562421-edff1d6fd6f7.json'
property_id = '429909365'

client = BetaAnalyticsDataClient()

def format_report(request):
    response = client.run_report(request)
    
    # Row index
    row_index_names = [header.name for header in response.dimension_headers]
    row_header = []
    for i in range(len(row_index_names)):
        row_header.append([row.dimension_values[i].value for row in response.rows])

    row_index_named = pd.MultiIndex.from_arrays(np.array(row_header), names = np.array(row_index_names))
    
    # Row flat data
    metric_names = [header.name for header in response.metric_headers]
    data_values = []
    for i in range(len(metric_names)):
        data_values.append([row.metric_values[i].value for row in response.rows])

    output = pd.DataFrame(data = np.transpose(np.array(data_values, dtype = 'f')), index = row_index_named, columns = metric_names)
    return output

start_date = '2024-02-25'
end_date = str(date.today())

monthly_metrics_comparison_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="day")],
        metrics=[Metric(name="newUsers"), 
                 Metric(name="activeUsers"),
                 Metric(name='sessions')],
        order_bys = [OrderBy(dimension = {'dimension_name': 'day'}, desc=False)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )
print(client.run_report(monthly_metrics_comparison_request))
monthly_metrics_comparison = format_report(monthly_metrics_comparison_request)
def proba():
    return client.run_report(monthly_metrics_comparison_request)


plt.figure(figsize=(10, 4))

metrics = ['newUsers', 'activeUsers', 'sessions'] 
colors = {'newUsers': 'blue', 'activeUsers': 'green', 'sessions': 'red'}

for metric in metrics: 
    sns.lineplot(data=monthly_metrics_comparison, x='day', y=metric, label=metric, color=colors[metric])
    
plt.xlabel('Day')
plt.ylabel('Kurac')
plt.title('Daily New User, Active User, and Session Metrics Comparison')
plt.legend()
plt.grid(True)

# Run report
landing_page_users_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="landingPage")],
        metrics=[Metric(name="activeUsers"),
                 Metric(name="bounceRate")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

landing_table = format_report(landing_page_users_request)
landing_table['activeUsers'] = landing_table['activeUsers'].astype('int')

print('\nTop 15 Landing Pages and, its Bounce Rate')
print(landing_table[0:15]) 

event_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="eventName")],
        metrics=[Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

event_request

event_comparison = format_report(event_request)
plt.figure(figsize=(12,6))
sns.set(style="darkgrid")

ax = sns.barplot(data=event_comparison, x='activeUsers', y='eventName',estimator="sum", palette='Blues_r', hue='eventName')
ax.bar_label(ax.containers[0], fontsize=11)

plt.title('Event Distribution by Active Users')
plt.tight_layout()

traffic_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="day"), 
                    Dimension(name="sessionMedium")],
        metrics=[Metric(name="averageSessionDuration"), 
                 Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'day'}),
                    OrderBy(dimension = {'dimension_name': 'sessionMedium'})],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )
traffic_channels = format_report(traffic_request)

# Create a pivot table for the data
pivot_data = traffic_channels.pivot_table(index='day', columns='sessionMedium', values='activeUsers')

# Create the stacked bar plot
plt.figure(figsize=(10, 4))
sns.set(style="darkgrid")

ax = pivot_data.plot(kind='bar', stacked=True, colormap='Blues')

plt.xlabel("Month")
plt.ylabel("Active Users")
plt.title("Active Users by Session Medium")
plt.legend(title='Session Medium', loc='upper left', bbox_to_anchor=(1, 1))

plt.tight_layout()

mobileDeviceModel_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="mobileDeviceModel")],
        metrics=[Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    )

userAgeBracket_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="userAgeBracket")],
        metrics=[Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    ) 

userGender_request = RunReportRequest(
        property='properties/'+property_id,
        dimensions=[Dimension(name="userGender")],
        metrics=[Metric(name="activeUsers")],
        order_bys = [OrderBy(dimension = {'dimension_name': 'activeUsers'}, desc=True)],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
    ) 

mobileDeviceModel = format_report(mobileDeviceModel_request)
userAgeBracket = format_report(userAgeBracket_request)
gender = format_report(userGender_request)


# Export & load the data

fig, axes = plt.subplots(1, 3, figsize=(12, 5))  # 1 row, 3 columns of subplots

palette = 'Blues_r'
rotation = 90

# Create barplots
top_10_mobile_models = mobileDeviceModel.nlargest(10, 'activeUsers')
sns.barplot(x='mobileDeviceModel', y='activeUsers', data=top_10_mobile_models, ax=axes[0], palette=palette)
axes[0].set_title('Mobile Device Model')

sns.barplot(x='userAgeBracket', y='activeUsers', data=userAgeBracket, ax=axes[1], palette=palette)
axes[1].set_title('User Age Bracket')

sns.barplot(x='userGender', y='activeUsers', data=gender, ax=axes[2], palette=palette)
axes[2].set_title('User Gender Distribution')

plt.tight_layout()

plt.show()